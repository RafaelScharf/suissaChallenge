import React, { useState } from 'react';
import AveragePrice from '../../../molecules/forms/averagePrice/index'
import ProfitNLoss from '../../../molecules/forms/profitNLoss/index'
import Button from '../../../atoms/button/index'


const $ = (el) => document.querySelector(el)
const $$ = (el) => document.querySelectorAll(el)

const tabs = $$(".tab")
const tabsContent = $$(".tab-content")
const hideEl = (el) => el.classList.add('hide')
const hideTabs = () => tabsContent.forEach(hideEl)

// const showTab = (tab) => (evt) => 
//   hideTabs() || $(`#${tab}`).classList.remove('hide')

  
const showTab = (tab) => (evt) => {
  
  
  if(tab === 'tab-pnl'){
    $('#tab-avg').classList.add('hide') 
    $(`#${tab}`).classList.remove('hide')
    console.log( $('#tab-avg'))
  }
  if(tab == 'tab-avg'){
    $('#tab-pnl').classList.add('hide')
    $(`#${tab}`).classList.remove('hide')
    console.log( $('#tab-pnl'))
  }
  /*
  console.log({tab})
  evt.preventDefault()
  hideTabs() 
  $(`#${tab}`).classList.remove('hide')
  $$(`.tabs li`).forEach(t => t.classList.remove('tab-active'))
  $(`a[data-name=${tab}]`).closest('li').classList.add('tab-active')*/ 
  
}

const clickToShowTabs = tab => tab.addEventListener("click", showTab(tab.dataset.name))
tabs.forEach(clickToShowTabs)

const Calculator = () => {

  const [tabAvg, setTabAvg] = useState('tab-avg');
  const [tabPnl, setTabPnl] = useState('tab-pnl');


  return(

    <>    
      
    
    <div className="tabs">
      <ul className="row">
        <li><span><Button text="Lucro e Perda" className="tab column" dataName="tab-pnl" href="#pnl" onClick={showTab(tabPnl)}/></span></li>
        <li><Button text="Preço Médio" className="tab column" dataName="tab-avg" href="#avg" onClick={showTab(tabAvg)}/></li>
      </ul>
      
    </div>
    
    <div className="tabs-content">
      <div id="tab-avg" className="tab-content open-price row hide">
        <div className="column">
          <AveragePrice />
        </div>
      </div>
      
    
      <div id="tab-pnl" className="tab-content calculator row hide">
        
        <div className="column">
          <ProfitNLoss />
        </div>
      </div>
    </div>
    

    </>
    

  )

}

export default Calculator;