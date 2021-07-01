module.exports = (req, res, next) => {
	const userSession = req.session.logged;

	if (userSession) {
		res.redirect('/user/profile');
	}

	next();
};
