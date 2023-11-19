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
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'ESBIS',
    A: 120,
    B: 150,
    C: 105,
    D: 10,
    fullMark: 150,
  },
  {
    subject: 'TUBIS',
    A: 198,
    B: 130,
    C: 185,
    D: 10,
    fullMark: 150,
  },
  {
    subject: 'REKLAM KURULU',
    A: 86,
    B: 150,
    C: 15,
    D: 100,
    fullMark: 250,
  },
  {
    subject: 'E-GARANTI',
    A: 99,
    B: 100,
    C: 150,
    D: 10,
    fullMark: 150,
  },
  {
    subject: 'MERSIS',
    A: 85,
    B: 90,
    C: 85,
    D: 190,
    fullMark: 150,
  },
];




const DashboardPage = () => {

  const [kullaniciIlk, setKullaniciIlk] = React.useState('');
  const [kullaniciIki, setKullaniciIki] = React.useState('');

  const [kullaniciIlkData, setKullaniciIlkData] = React.useState('A');
  const [kullaniciIkiData, setKullaniciIkiData] = React.useState('B');

  const onChangeKullaniciIlk = (e:any) => {
    console.log('e :',e.target.value)
    setKullaniciIlk(e.target.value)
    setKullaniciIlkData((e.target.value=='Selen 1'?'A': e.target.value=='Selen 2' ? 'B' : e.target.value=='Selen 3' ? 'C' : e.target.value=='Selen 4' ? 'D':'A'))
  }  
  const onChangeKullaniciIki = (e:any) => {
    console.log('e :',e.target.value)
    setKullaniciIki(e.target.value)
    setKullaniciIkiData((e.target.value=='Selen 1'?'A': e.target.value=='Selen 2' ? 'B' : e.target.value=='Selen 3' ? 'C' : e.target.value=='Selen 4' ? 'D':'A'))
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
        Kullanıcı Performansı
      </PageTitle>

      <div style={{display:'flex'}}>
      <div style={{display:'flex',flexDirection: 'column'}}>
      <p>Kullanıcı 1</p>
      <select onChange={onChangeKullaniciIlk} defaultValue="Selen 2">
        <option>Selen 2</option>
        <option>Selen 1</option>
        <option>Selen 3</option>
        <option>Selen 4</option>
      </select>

      </div>
      <div style={{display:'flex',flexDirection: 'column',marginLeft:'1em'}}>
      <p>Kullanıcı 2</p>
      <select onChange={onChangeKullaniciIki} defaultValue="Selen 1">
        <option>Selen 1</option>
        <option>Selen 2</option>
        <option>Selen 3</option>
        <option>Selen 4</option>
      </select>

      </div>

      

      </div>
      <div style={{display:'flex'}}>
      <div 
        style={{
          width:'60%', 
          height:'350px',    
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <ResponsiveContainer width="100%" height="100%" >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name={kullaniciIlk} dataKey={kullaniciIlkData} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={kullaniciIki} dataKey={kullaniciIkiData} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div style={{minWidth:'350px'}}>
        <h2>
        Atılan commit sayısı :

        </h2>
        <p>
        {kullaniciIlk} : <br />
  {data.filter(singleData => singleData[kullaniciIlkData as keyof typeof data[0]]).map(filteredData => (
    <span>
      {filteredData.subject} : {filteredData[kullaniciIlkData as keyof typeof data[0]]}, <br />
    </span>
  ))}
</p>
       
<p>
{kullaniciIki} : <br />
  {data.filter(singleData => singleData[kullaniciIkiData as keyof typeof data[0]]).map(filteredData => (
    <span>
      {filteredData.subject} : {filteredData[kullaniciIkiData as keyof typeof data[0]]}, <br />
    </span>
  ))}
</p>

      </div>
      </div>

    </>
  )
}

const UserPerformance = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <br></br>
      <br></br>
      <DashboardPage />
    </>
  )
}

export {UserPerformance}
