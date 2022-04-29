const fn =()=>{
    setTimeout(()=>{
        console.log('IN Time Out ')
    })
    console.log('out side of the Time Out ')
}

module.exports.fn = fn