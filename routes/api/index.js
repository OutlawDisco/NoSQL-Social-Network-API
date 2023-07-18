const router = require("express").Router();
const userRoutes = require("./userroutes");

router.use("/users", userRoutes);
// router.use('/students', studentRoutes);

module.exports = router;
