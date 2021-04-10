import './assets/sass/chart.scss';
import LineChart from './components/LineChart';
import ChannelButtons from './components/ChannelButton';
import SlicedSection from './components/SlicedSection';
import { useState } from 'react';

function App() {
  const [activeChannels,setActiveChannels] = useState([]);
  const [slicedSections,setSlicedSections] = useState([]);
  const [leftSlice,setLeftSlice] = useState(0);
  const [rightSlice,setRightSlice] = useState(0);
  const [slices,setSlices] = useState([]);
  const [selectedSection,setSelectedSection] = useState(null);

  let changeActiveChannels = (active) => {
    setActiveChannels([...active]);
  }

  let addNewSlicedSection = () => {
    setLeftSlice(1);
    setRightSlice(600);
    addSlicedSection(true);
  }

  let addSlicedSection = (isNew) => {
    let slicesList = slices;
    let tempSlides = slicedSections;
    isNew? slicesList.push([1,1200,10,90,tempSlides.length+1]) : slicesList.push([parseInt(leftSlice * 2),parseInt(rightSlice * 2),10,90,tempSlides.length+1])
    setSlices([...slicesList]);
    isNew? tempSlides.push({id: tempSlides.length+1, start: 10.00, end: 11.00, min_start: '10%' , min_end: '90%' }) : tempSlides.push({id: tempSlides.length+1, start: (10+(leftSlice/1000)), end: (10+(rightSlice/1000)), min_start: '10%' , min_end: '90%' })
    setSlicedSections([...tempSlides]);
  }

  let removeSlicedSection = (id,ind) => {
    let tempSlices = slices.filter((item,index)=>item[4] !== id);
    setSlices([...tempSlices]);
    let tempSlides = slicedSections.filter((item,index)=>item.id !== id);
    setSlicedSections([...tempSlides]);
  }

  let leftSlider = (prop) => {
    setLeftSlice(prop);
    if(selectedSection !== null){
      let tempSlides = slicedSections;
      tempSlides[selectedSection].start = 10+(parseInt(leftSlice) / 1000);
      tempSlides[selectedSection].end = 10+(parseInt(rightSlice) / 1000);
      setSlicedSections([...tempSlides]);
    }
  }

  let rightSlider = (prop) => {
    setRightSlice(prop);
    if(selectedSection !== null){
      let tempSlides = slicedSections;
      tempSlides[selectedSection].start = 10+(parseInt(leftSlice) / 1000);
      tempSlides[selectedSection].end = 10+(parseInt(rightSlice) / 1000);
      setSlicedSections([...tempSlides]);
    }
  }

  let selectSection = (prop) => {
    if(selectedSection === prop){
      setSelectedSection(null);
      setLeftSlice(1);
      setRightSlice(1);
    } else {
      setSelectedSection(prop);
      setLeftSlice(slices[prop][0]/2);
      setRightSlice(slices[prop][1]/2);
    }
  }

  let changeSliderText = (sld,type,id) => {
    let sliced = slices;
    let val = (10+(((parseFloat(sld)-10)*1000)/1000))
    let selectedSlice = null;
    let selectedIndex = null;
    for(let i = 0; i < sliced.length; i++){
      if(sliced[i][4] === id){
        selectedSlice = sliced[i][4];
        selectedIndex = i;
      }
    }
    if(type === 0){
      setLeftSlice((val-10)*1000)
      if(selectedSlice !== null){
        sliced[selectedIndex][0] = ((val-10)*1000)*2;
      }
    } else if(type === 1){
      setRightSlice((val-10)*1000)
      if(selectedSlice !== null){
        sliced[selectedIndex][1] = ((val-10)*1000)*2;
      }
    }
    setSlices([...sliced]);
  }

  return (
    <div>
      <ChannelButtons change={changeActiveChannels}/>
      <LineChart active={activeChannels} leftSlider={leftSlider} rightSlider={rightSlider} slices={slices} addSlice={addSlicedSection} leftVal={leftSlice} rightVal={rightSlice} selected={selectedSection}/>
      {slicedSections.map((item,index)=>{
        return <SlicedSection item={item} remove={removeSlicedSection} ind={index} change={changeSliderText} select={selectSection} selected={selectedSection === index ? true : false}/>;
      })}
      <div className={"card new-slice"} onClick={addNewSlicedSection}>
        <img src={"/add.svg"} alt={"Add Slice"}/>
      </div>
    </div>
  );
}

export default App;
