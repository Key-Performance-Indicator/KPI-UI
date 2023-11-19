import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ChartsWidget1,
    MixedWidget1,
    // ListsWidget3,
    // ListsWidget4,
    // ListsWidget5,
    // ListsWidget9,
    // MixedWidget6,
    // MixedWidget7,
    // MixedWidget8,
    StatisticsWidget5,
    TablesWidget1,
    TablesWidget11,
    TablesWidget5,
    TablesWidget9,
} from '../../../_metronic/partials/widgets'

import { KTIcon } from '../../../_metronic/helpers'

const UserDetails = () => {

  const user = {
    name: 'Burak TEMELLİOĞLU',
    avatar: 'https://i.pinimg.com/736x/e0/06/b0/e006b0322a7126ef96b17e25a1089f9e.jpg',
    detail: ['Full + Full + Full Back Front Top Down Stack'],
    projects: ['Project 1', 'Project 2'],
    totalTasks: 10,
    doneTasks: 5,
    color: 'orange',
    roles:['Admin','User'],
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
          <PageTitle breadcrumbs={[]} description='Kullanici Detay'>
        Kullanici Detaylari
      </PageTitle>
      
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={user.avatar} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    {user.name}
                  </a>
                  <a href='#'>
                    <KTIcon iconName='verify' className='fs-1 text-primary' />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {user.detail.map( singleDetail => {  return (<a>{singleDetail}</a>)  }   )}
                  </a>
                </div>
              </div>

              
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='bi bi-card-checklist' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>4500</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Toplam Kapatilan Task Sayisi</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='bi bi-ui-checks-grid' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>75</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Aktif Kapatmasi Gereken Task Sayisi</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='bi bi-keyboard' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>60%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Bitirme Orani</div>
                  </div>
                </div>
              </div>

              <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Tum aktif sprintlerdeki task bitirme orani</span>
                  <span className='fw-bolder fs-6'>50%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: '50%'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profil Detaylari</h3>
          </div>

          <button className='btn btn-primary align-self-center'>
            Profili Duzenle
          </button>
          {/* <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Profili Duzenle
          </Link> */}
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Kullanici Adi :</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{user.name}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Bulundugu Projeler</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{user.projects.map( singleProject => { return <p>{singleProject}</p>} )}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Renk</label>

            <div className='col-lg-8'>
              <span>{user.color}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Rolleri
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Country of origination'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{user.roles.map(singleRole => { return <span>{singleRole}, </span>})}</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> 

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}
     
    </>
  )
}

const UserDetailsWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <br></br>
      <br></br>
      <UserDetails />
    </>
  )
}

export {UserDetailsWrapper}
