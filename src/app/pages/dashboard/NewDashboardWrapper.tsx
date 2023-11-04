import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
    MixedWidget1,
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
import { IconUserModel } from '../../modules/profile/ProfileModels'
import { Card2 } from '../../../_metronic/partials/content/cards/Card2'

const DashboardPage = () => {

    const users1: Array<IconUserModel> = [
        {name: 'Selen YEL', avatar: 'https://64.media.tumblr.com/cd9aba8c7e369bef8aa90b39c3e9aa09/71b8990061516f8c-87/s500x750/8ea9725940eafb1e32286e6a7cbdecad65532455.jpg'},
        {name: 'Abdurrahman TEMELLİOĞLU', avatar:'https://t4.ftcdn.net/jpg/04/02/72/03/360_F_402720349_ROd6GROLvXaidL9SLnzZuUR6r5cjuaQC.jpg' },
        {name: 'İsmail Afşin BARAN', avatar: 'https://w7.pngwing.com/pngs/1018/687/png-transparent-lion-animal-icon-lion-s-head-mane-lion-icon-digital-drawing-wild-animal-predator-carnivore.png'},
        {name: 'Yusuf DEMİRBİLEK', avatar:'https://media.licdn.com/dms/image/C4D03AQH9sgSuNS7K2A/profile-displayphoto-shrink_800_800/0/1662645081183?e=2147483647&v=beta&t=n3w-rBvFT2vGrYrc5LDeVSZ-RcdfHC3YRo6ESGtz4Gc' },
        {name: 'Deniz Selçuk', avatar:'https://media.licdn.com/dms/image/D4D03AQF3otKga2uLwQ/profile-displayphoto-shrink_400_400/0/1686643010466?e=1701907200&v=beta&t=UPkXdtJZXc2XDsOdGuCejKfJx3OWViMU-kjRFvRCavY' },
      ]
      
      const users2: Array<IconUserModel> = [
        {name: 'Burak TEMELLİOĞLU', avatar:'https://i.pinimg.com/736x/e0/06/b0/e006b0322a7126ef96b17e25a1089f9e.jpg' },
        {name: 'Selen YEL', avatar: 'https://64.media.tumblr.com/cd9aba8c7e369bef8aa90b39c3e9aa09/71b8990061516f8c-87/s500x750/8ea9725940eafb1e32286e6a7cbdecad65532455.jpg'},
        {name: 'Abdurrahman TEMELLİOĞLU', avatar:'https://t4.ftcdn.net/jpg/04/02/72/03/360_F_402720349_ROd6GROLvXaidL9SLnzZuUR6r5cjuaQC.jpg' },
        {name: 'İsmail Afşin BARAN', avatar: 'https://w7.pngwing.com/pngs/1018/687/png-transparent-lion-animal-icon-lion-s-head-mane-lion-icon-digital-drawing-wild-animal-predator-carnivore.png'},
      ]
      
      const users3: Array<IconUserModel> = [
        {name: 'Burak TEMELLİOĞLU', avatar:'https://i.pinimg.com/736x/e0/06/b0/e006b0322a7126ef96b17e25a1089f9e.jpg' },
        {name: 'Abdurrahman TEMELLİOĞLU', avatar:'https://t4.ftcdn.net/jpg/04/02/72/03/360_F_402720349_ROd6GROLvXaidL9SLnzZuUR6r5cjuaQC.jpg' },
        {name: 'İsmail Afşin BARAN', avatar: 'https://w7.pngwing.com/pngs/1018/687/png-transparent-lion-animal-icon-lion-s-head-mane-lion-icon-digital-drawing-wild-animal-predator-carnivore.png'},
      ]

      const users4: Array<IconUserModel> = [
        {name: 'Hasan Akdağ', avatar:'https://media.licdn.com/dms/image/D4D03AQFz-nVPMwEJ2A/profile-displayphoto-shrink_800_800/0/1665173968651?e=2147483647&v=beta&t=o-bC7GhYvV3rqx4o8k5GOj07aH3cm6kthxYnFBSfnd4' },
        {name: 'Sena GİTMİŞ', avatar:'https://avatars.githubusercontent.com/u/46827580?v=4?s=400' },
        {name: 'Yusuf DEMİRBİLEK', avatar:'https://media.licdn.com/dms/image/C4D03AQH9sgSuNS7K2A/profile-displayphoto-shrink_800_800/0/1662645081183?e=2147483647&v=beta&t=n3w-rBvFT2vGrYrc5LDeVSZ-RcdfHC3YRo6ESGtz4Gc' },
        {name: 'Abdurrahman TEMELLİOĞLU', avatar:'https://t4.ftcdn.net/jpg/04/02/72/03/360_F_402720349_ROd6GROLvXaidL9SLnzZuUR6r5cjuaQC.jpg' },
        {name: 'İsmail Afşin BARAN', avatar: 'https://w7.pngwing.com/pngs/1018/687/png-transparent-lion-animal-icon-lion-s-head-mane-lion-icon-digital-drawing-wild-animal-predator-carnivore.png'},
      ]

  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
    
      <PageTitle breadcrumbs={[]} description='Proje İstatistikleri'>
        Ana Ekran
      </PageTitle>
      {/* <div className='row g-5 g-xl-8'>
        <MixedWidget1 className={''} color={''}/>
      </div> */}

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='https://cdn.ticaret.gov.tr/images/logo/384px.png'
            badgeColor='primary'
            status='Sprint 16'
            statusColor='primary'
            title='ESBİS'
            description='ESNAF VE SANATKAR BİLGİ SİSTEMİ'
            date='121'
            budget='24'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='https://i.haberanadolu.net/c/90/1746x984/s/dosya/haber/reklam-kurulu-tuketicileri-man_1691648323_JvOieZ.jpg'
            badgeColor='info'
            status='Sprint 6'
            statusColor='info'
            title='Reklam Kurulu'
            description='Reklam Kurulu Bilgi Sistemi'
            date='221'
            budget='36'
            progress={30}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='https://cdn.ticaret.gov.tr/images/logo/384px.png'
            badgeColor='success'
            status='Sprint 14'
            statusColor='success'
            title='TÜBİS'
            description='Tüketici Hakem Heyetlerine Başvuru İşlemi'
            date='160'
            budget='25'
            progress={20}
            users={users3}
          />
        </div>



        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='https://cdn.ticaret.gov.tr/images/logo/384px.png'
            badgeColor='warning'
            status='Sprint 6'
            statusColor='warning'
            title='GÜBİS'
            description='Güvensiz Ürün Portalı'
            date='101'
            budget='14'
            progress={40}
            users={users3}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='https://cdn.ticaret.gov.tr/images/logo/384px.png'
            badgeColor='danger'
            status='Sprint 5'
            statusColor='danger'
            title='E-GARANTİ'
            description='Elektronik Garanti Bilgi Sistemi'
            date='421'
            budget='26'
            progress={90}
            users={users4}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='https://cdn.ticaret.gov.tr/images/logo/384px.png'
            badgeColor='dark'
            status='Sprint 4'
            statusColor='dark'
            title='MERSİS'
            description='Merkezi Sicil Kayıt Sistemi'
            date='180'
            budget='45'
            progress={100}
            users={users3}
          />
        </div>
    </div>
     
    </>
  )
}

const NewDashboardWrapper = () => {
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

export {NewDashboardWrapper}
