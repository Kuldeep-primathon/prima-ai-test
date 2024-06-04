const DateComponent=()=>{
    console.log('date [page')
    let date=new Date()
    return (
        <>
        {/* here is the comment */}
        <div>
            <p><span>Time is {date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()}</span></p>
            <img src="" alt=""/>
        
        </div>
        </>
    )

}
export default DateComponent