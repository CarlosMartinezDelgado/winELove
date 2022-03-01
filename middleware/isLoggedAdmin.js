
const isLoggedAdmin = ((req,res,next) => {
  if( req.session.user.role === 'admin'){
    next();
  }else{
    res.redirect ("/main")
  }
})

module.exports = isLoggedAdmin