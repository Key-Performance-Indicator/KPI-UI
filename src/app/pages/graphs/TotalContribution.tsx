import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
    // ListsWidget3,
    // ListsWidget4,
    // ListsWidget5,
    // ListsWidget9,
    // MixedWidget6,
    // MixedWidget7,
    // MixedWidget8,
    StatisticsWidget5,
    TablesWidget11,
    TablesWidget9,
} from '../../../_metronic/partials/widgets'

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const dataTumu = [
  { name: 'Selen A', value: 640 },
  { name: 'Selen B', value: 860 },
  { name: 'Selen C', value: 1000 },
  { name: 'Selen D', value: 840 },
];
const dataEsbis = [
  { name: 'Selen A', value: 40 },
  { name: 'Selen B', value: 300 },
  { name: 'Selen C', value: 300 },
  { name: 'Selen D', value: 20 },
];

const dataTubis = [
  { name: 'Selen A', value: 40 },
  { name: 'Selen B', value: 300 },
  { name: 'Selen C', value: 30 },
  { name: 'Selen D', value: 200 },
];

const dataReklamKurulu = [
  { name: 'Selen A', value: 400 },
  { name: 'Selen B', value: 30 },
  { name: 'Selen C', value: 300 },
  { name: 'Selen D', value: 20 },
];

const dataEGaranti = [
  { name: 'Selen A', value: 60 },
  { name: 'Selen B', value: 30 },
  { name: 'Selen C', value: 40 },
  { name: 'Selen D', value: 20 },
];

const dataMersis = [
  { name: 'Selen A', value: 100 },
  { name: 'Selen B', value: 200 },
  { name: 'Selen C', value: 300 },
  { name: 'Selen D', value: 400 },
];



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const getIntroOfPage = (name:any) => {
  if (name === 'Selen A') {
    return "Selen A is about men's clothing";
  }
  if (name === 'Selen B') {
    return "Selen B is about women's dress";
  }
  if (name === 'Selen C') {
    return "Page C is about women's bag";
  }
  if (name === 'Selen D') {
    return 'Page D is about household goods';
  }
  return '';
};

const CustomTooltip = ({ active, payload, name }:any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="name">{`${name} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(name)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};


const TotalContributionPage = () => {

  const onPieEnter = (e:any) => {
    console.log('e :',e)
  }  
  const [kullaniciIlk, setKullaniciIlk] = React.useState('Selen 2');
  const [data, setData] = React.useState(dataTumu);

  const onChangeKullaniciIlk = (e:any) => {
    console.log('e :',e.target.value)
    
    const a = e.target.value;
    
    setKullaniciIlk(e.target.value)
    setData(a === 'TÜMÜ' ? dataTumu : a === 'ESBIS' ? dataEsbis : a === 'TUBIS' ? dataTubis : a === 'REKLAM KURULU' ? dataReklamKurulu : a === 'E-GARANTI' ? dataEGaranti : a === 'MERSIS' ? dataMersis : dataTumu)
  }  
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
    
      <PageTitle breadcrumbs={[]} description='#XRS-45670'>
        Toplam Katkı
      </PageTitle>

      <div style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>


      <div style={{display:'flex',flexDirection: 'column', marginRight:'5em'}}>
      <p>Proje :</p>
        <select onChange={onChangeKullaniciIlk}>
          <option>TÜMÜ</option>
          <option>ESBIS</option>
          <option>TUBIS</option>
          <option>REKLAM KURULU</option>
          <option>E-GARANTI</option>
          <option>MERSIS</option>
        </select>
      </div>

        <PieChart width={800} height={400} onMouseEnter={onPieEnter} >
        <Pie
  style={{ marginLeft: '50em' }}
  data={data}
  cx={120}
  cy={200}
  innerRadius={60}
  outerRadius={80}
  fill="#8884d8"
  paddingAngle={5}
  dataKey="value"
  label 
>
  <Tooltip content={<CustomTooltip />} />
  {data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  ))}
</Pie>


        </PieChart>
        <div>

          <h2>
            Kullanıcı Katkı Oranları :</h2><br /> {data.map((singleData,i) => (
              <div style={{display:'flex'}}>
                <div style={{width:'15px',height:'15px',backgroundColor:COLORS[i]}}></div>
                <p style={{marginLeft:'1em'}}>
                  {singleData.name}  :  {singleData.value} ,  <br />
                </p>
              </div>

              
              ))}
          
        </div>
      </div>

    </>
  )
}

const TotalContribution = () => {
  const intl = useIntl()
  return (
    <>
    <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD' })}</PageTitle>
      <br></br>
      <br></br>
      <TotalContributionPage />
    </>
  )
}

export {TotalContribution}
