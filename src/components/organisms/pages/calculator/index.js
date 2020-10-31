import React, { useState } from 'react';
import AveragePrice from '../../../molecules/forms/averagePrice/index'
import ProfitNLoss from '../../../molecules/forms/profitNLoss/index'


const $ = (el) => document.querySelector(el)
const $$ = (el) => document.querySelectorAll(el)

const startTabs = () => {
  const tabs = $$(".tab")
  const tabsContent = $$(".tab-content")
  const hideEl = (el) => el.classList.add('hide')
  const hideTabs = () => tabsContent.forEach(hideEl)
  
  // const showTab = (tab) => (evt) => 
  //   hideTabs() || $(`#${tab}`).classList.remove('hide')

    
  const showTab = (tab) => (evt) => {
    console.log({tab})
    evt.preventDefault()
    hideTabs() 
    $(`#${tab}`).classList.remove('hide')
    $$(`.tabs li`).forEach(t => t.classList.remove('tab-active'))
    $(`a[data-name=${tab}]`).closest('li').classList.add('tab-active')
    
  }

  const clickToShowTabs = tab => tab.addEventListener("click", showTab(tab.dataset.name))
  tabs.forEach(clickToShowTabs)
}

startTabs();
const Calculator = () => {

  return(

    <>
    
    <div className="tabs">
      <ul className="row">
        <li><span className="tab column" data-name="tab-pnl" href="#pnl">Lucro e Perda</span></li>
        <li><span className="tab column" data-name="tab-avg" href="#avg">Preço Médio</span></li>
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