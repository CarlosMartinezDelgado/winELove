
const isAdmin = ((req,res,next) => {
  if( req.session.user.role){
    next();
  }else{
    res.redirect ("auth/admin")
  }
})

module.exports = isAdmin