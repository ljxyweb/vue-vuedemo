/**
 * Created by zhouyan19724 on 2017/8/2.
 */
module.exports = (req, res, next) => {
  req.method = 'GET'
  next()
}
