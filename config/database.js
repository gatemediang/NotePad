if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://gatedb:olog1000@ds113795.mlab.com:13795/notemaker-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}