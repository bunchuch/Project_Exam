import React from "react";





var clauses = ["set", "complete" ,"typically" ,"subject" ,"conveying", "exclamation"," consisting", "clause", "subordinate"]


function FillBlank  (){
    return <div className="space-y-2">
         Fill Blank
        <div className="border-[1px] px-2 py-2 flex justify-between">
            {clauses.map((value)=><div className="bg-gray-100 px-2 py-2 rounded-[5px] " key={value.toString()}>{value}</div>)}
        </div>
        <p>
        a 1._____of words that is complete in itself, 1 ______ containing a  2 ______ and predicate, 3 _______ a statement,
         question, 4___________, or command, and  5_________ of a main  6__________ and sometimes one or 
         more  7_______ clauses.  
        </p>

<p>Fill in Correct Answer on Box</p>

<label>1</label>
        <input type="text" class="border-[1px]"></input>
        <label>2</label>
        <input type="text" class="border-[1px]"></input>
        <label>3</label>
        <input type="text" class="border-[1px]"></input>
        <label>4</label>
        <input type="text" class="border-[1px]"></input>
        <label>5</label>
        <input type="text" class="border-[1px]"></input>
        <label>6</label>
        <input type="text" class="border-[1px]"></input>
        <label>7</label>
        <input type="text" class="border-[1px]"></input>
       </div>

}

export default FillBlank