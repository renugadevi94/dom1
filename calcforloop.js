let condiv=document.createElement('div');
          condiv.setAttribute('class','container');
          condiv.classList.add('text-center');
          document.body.appendChild(condiv);

          let heading=document.createElement('h1');
          heading.textContent='CALCULATOR';
          condiv.appendChild(heading)

  let rowDiv=document.createElement('div');
        rowDiv.setAttribute('class','row');
        condiv.appendChild(rowDiv);
        
    let input=document.createElement('input');
        input.setAttribute('class','input');
        input.setAttribute('type','text');
        condiv.appendChild(input)

for(let i=1;i<=4;i++){
        let rowDiv=document.createElement('div');
        rowDiv.setAttribute('class','row');
        condiv.appendChild(rowDiv);

      for(let j=1;j<=4;j++){
        let colDiv=document.createElement('div');
            colDiv.setAttribute('class','col');
        let btn=document.createElement('button');
            btn.setAttribute('class','button');
             
            rowDiv.appendChild(colDiv);
            colDiv.appendChild(btn);
            
        }
    }
            
    document.getElementsByTagName('button')[0].innerHTML='C'
    document.getElementsByTagName('button')[1].innerHTML='/'
    document.getElementsByTagName('button')[2].innerHTML='+'
    document.getElementsByTagName('button')[3].innerHTML='-'
    document.getElementsByTagName('button')[4].innerHTML=7
    document.getElementsByTagName('button')[5].innerHTML=8
    document.getElementsByTagName('button')[6].innerHTML=9
    document.getElementsByTagName('button')[7].innerHTML='*'
    document.getElementsByTagName('button')[8].innerHTML=4
    document.getElementsByTagName('button')[9].innerHTML=5 
    document.getElementsByTagName('button')[10].innerHTML=6
    document.getElementsByTagName('button')[11].innerHTML='%'
    document.getElementsByTagName('button')[12].innerHTML=1
    document.getElementsByTagName('button')[13].innerHTML=2
    document.getElementsByTagName('button')[14].innerHTML=3
    document.getElementsByTagName('button')[15].innerHTML='='
     
    let string="";
    let buttons=document.querySelectorAll('button');
    Array.from(buttons).forEach((button)=>{
      button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
          string=eval(string)
          document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
          string=" "
          document.querySelector('input').value=string;}
        else{
        
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
      });
    });

    
    
 
    
    