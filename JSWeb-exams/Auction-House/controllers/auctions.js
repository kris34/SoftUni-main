const { isGuest, hasUser } = require('../middlewares/guards');
const {
  createAuction,
  getAll,
  getOne,
  bid,
  getUser,
  editItem,
  deleteById,
} = require('../services/auctionService');
const { parseError } = require('../util/parser');

const auctionsController = require('express').Router();

auctionsController.get('/create', isGuest(), async (req, res) => {
  res.render('create', {
    title: 'Create auction',
    user: req.user,
  });
});

auctionsController.post('/create', isGuest(), async (req, res) => {
  const auction = {
    title: req.body.title,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
    owner: req.user._id,
  };

  try {
    if (req.body.price < 0) {
      throw new Error('Price cannot be below $0');
    }

    if (Object.values(req.body).some((v) => !v)) {
      throw new Error('All fields are required!');
    }
    await createAuction(auction);

    res.redirect('/auctions/create');
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create',
      errors,
      user: req.user,
    });
  }
});

auctionsController.get('/catalog', async (req, res) => {
  const auctions = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    auctions,
    user: req.user,
  });
});

auctionsController.get('/details/:id', async (req, res) => {
  const item = await getOne(req.params.id);
  let view;
  let currentBidder;

  const isOwner = item.owner._id.toString() == req.user?._id?.toString();
  item.hasBidders = false;

  if (item.bidders.length > 0) {
    currentBidder = item.bidders[item.bidders.length - 1];
    item.hasBidders = true;
  }

  const bidder = await getUser(currentBidder);
  item.currentBidder = bidder?.email?.toString();

  item.userBidder = item.currentBidder == req.user?.email?.toString();

  if (isOwner) {
    view = 'details-owner';
  } else {
    view = 'details';
  }

  res.render(view, {
    title: 'Details',
    item,
    user: req.user,
  });
});

auctionsController.post('/details/:id', async (req, res) => {
  const item = await getOne(req.params.id);

  try {
    if (Number(req.body.price) < item.price) {
      throw new Error('You cant bid less then the current highest bid!');
    }

    await bid(req.body.price, req.params.id, req.user._id);
    res.redirect(`/auctions/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);
    res.render('details', {
      errors,
    });
  }
});

auctionsController.get('/edit/:id', async (req, res) => {
  const item = await getOne(req.params.id);

  item.noBidder = item.bidders.length == 0;

  res.render('edit', {
    title: 'Edit Page',
    item,
  });
});

auctionsController.post('/edit/:id', async (req, res) => {
  const item = await getOne(req.params.id);
  const data = req.body;

  try {
    await editItem(data, req.params.id);
    res.redirect(`/auctions/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);
    res.render('edit', {
      title: 'Edit Page',
      errors,
      item,
    });
  }
});

auctionsController.get('/delete/:id', hasUser(), async (req, res) => {
  await deleteById(req.params.id);

  res.redirect('/auctions/catalog');
});

module.exports = auctionsController;
 