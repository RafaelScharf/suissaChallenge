import React, { useState } from 'react';
import AveragePrice from '../../../molecules/forms/averagePrice/index'
import ProfitNLoss from '../../../molecules/forms/profitNLoss/index'
import Button from '../../../atoms/button/index'
/* 
const $ = (el) => document.querySelector(el)
const $$ = (el) => document.querySelectorAll(el)

const tabs = $$(".tab")
const tabsContent = $$(".tab-content")
const hideEl = (el) => el.classList.add('hide')
const hideTabs = () => tabsContent.forEach(hideEl)

 const showTab = (tab) => (evt) => 
  hideTabs() || $(`#${tab}`).classList.remove('hide')


const showTab = (tab) => (evt) => {
  
  const elTabAvg =  $('#tab-avg');
  const elTabPnl =  $('#tab-pnl');

  const elTab = $(`#${tab}`);
  
  if(tab === 'tab-pnl'){

    elTabAvg.classList.add('hide') 
   
    elTab.classList.contains('hide') === false
      ? elTab.classList.add('hide') 
      : elTab.classList.remove('hide')

  }
  
  if(tab === 'tab-avg'){

    elTabPnl.classList.add('hide')

    elTab.classList.contains('hide') === false
    ?elTab.classList.add('hide') 
    :elTab.classList.remove('hide')

    
  }
 
  console.log({tab})
  evt.preventDefault()
  hideTabs() 
  $(`#${tab}`).classList.remove('hide')
  $$(`.tabs li`).forEach(t => t.classList.remove('tab-active'))
  $(`a[data-name=${tab}]`).closest('li').classList.add('tab-active')
  
}
*/ 
//const clickToShowTabs = tab => tab.addEventListener("click", showTab(tab.dataset.name))
//tabs.forEach(clickToShowTabs)
const Calculator = () => {

  const [tabAvg, setTabAvg] = useState('tab-avg');
  const [tabPnl, setTabPnl] = useState('tab-pnl');
  const [hidePnl, setHidePnl] = useState('hide');
  const [hideAvg, setHideAvg] = useState('hide');

  const showTab2 = (tab) => {
  
    if(tab === 'tab-pnl'){

      setHideAvg('hide')
     
      hidePnl == ''
        ? setHidePnl('hide')
        : setHidePnl('')
        console.log({tab, hideAvg, hidePnl})
    }
    
    if(tab === 'tab-avg'){
    
      setHidePnl('hide')
     
      hideAvg === ''
        ? setHideAvg('hide')
        : setHideAvg('')
  
        console.log({tab, hideAvg, hidePnl})
    }

  }


  return(
    <>        
    <div className="tabs">
      <ul className="row">        
        <li><Button text="Lucro e Perda" className="tab column" dataName="tab-pnl" href="#pnl" onClick={() => showTab2(tabPnl)}/></li>
        <li><Button text="Preço Médio" className="tab column" dataName="tab-avg" href="#avg" onClick={() => showTab2(tabAvg)}/></li>
      </ul>
    </div>
    
    <div className="tabs-content">
      <div id="tab-avg" className="tab-content open-price row">
        <div className="column">
          <AveragePrice className={hideAvg} />
        </div>
      </div>
      
    
      <div id="tab-pnl" className="tab-content calculator row">
        <div className="column">
          <ProfitNLoss className={hidePnl} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Calculator;