exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.buyerView = (req, res) => {
    res.status(200).send("Buyer Content.");
};

exports.sellerView = (req, res) => {
    res.status(200).send("Seller Content.");
};

exports.adminView = (req, res) => {
    res.status(200).send("Admin Content.");
};

