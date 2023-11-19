import {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'
import UserModal from './components/UserModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown1 } from '../../../_metronic/partials'

interface IUserInfos {
  name : string;
  avatar : string;
  detail : Array<string>;
  projects : Array<string>;
  totalTasks : number;
  doneTasks : number;
  color : string;
}

const AddRoles = () => {

  const usersAll: Array<IUserInfos> = [
    {
      name: 'Burak TEMELLİOĞLU',
      avatar: 'https://i.pinimg.com/736x/e0/06/b0/e006b0322a7126ef96b17e25a1089f9e.jpg',
      detail: ['Full + Full + Full Back Front Top Down Stack'],
      projects: ['Project 1', 'Project 2'],
      totalTasks: 10,
      doneTasks: 5,
      color: 'orange'
    },
    {
      name: 'Selen YEL',
      avatar: 'https://64.media.tumblr.com/cd9aba8c7e369bef8aa90b39c3e9aa09/71b8990061516f8c-87/s500x750/8ea9725940eafb1e32286e6a7cbdecad65532455.jpg',
      detail: ['Frontend'],
      projects: ['Project 3'],
      totalTasks: 8,
      doneTasks: 3,
      color: 'pink'
    },
    {
      name: 'Abdurrahman TEMELLİOĞLU',
      avatar: 'https://t4.ftcdn.net/jpg/04/02/72/03/360_F_402720349_ROd6GROLvXaidL9SLnzZuUR6r5cjuaQC.jpg',
      detail: ['4 x 4 DevOPS'],
      projects: ['Project 4', 'Project 5'],
      totalTasks: 15,
      doneTasks: 8,
      color: 'red'
    },
    {
      name: 'İsmail Afşin BARAN',
      avatar: 'https://w7.pngwing.com/pngs/1018/687/png-transparent-lion-animal-icon-lion-s-head-mane-lion-icon-digital-drawing-wild-animal-predator-carnivore.png',
      detail: ['Aslan Tester İsmail Abi'],
      projects: ['Project 6'],
      totalTasks: 12,
      doneTasks: 6,
      color: 'yellow'
    },
    {
      name: 'Hasan Akdağ',
      avatar: 'https://media.licdn.com/dms/image/D4D03AQFz-nVPMwEJ2A/profile-displayphoto-shrink_800_800/0/1665173968651?e=2147483647&v=beta&t=o-bC7GhYvV3rqx4o8k5GOj07aH3cm6kthxYnFBSfnd4',
      detail: ['Gelecegin Milyoneri Backend Hasan'],
      projects: ['Project 7', 'Project 8'],
      totalTasks: 18,
      doneTasks: 10,
      color: 'blue'
    },
    {
      name: 'Sena GİTMİŞ',
      avatar: 'https://avatars.githubusercontent.com/u/46827580?v=4?s=400',
      detail: ['Muhtesem Backend Sena'],
      projects: ['Project 9'],
      totalTasks: 9,
      doneTasks: 4,
      color: 'violet'
    },
    {
      name: 'Yusuf DEMİRBİLEK',
      avatar: 'https://media.licdn.com/dms/image/C4D03AQH9sgSuNS7K2A/profile-displayphoto-shrink_800_800/0/1662645081183?e=2147483647&v=beta&t=n3w-rBvFT2vGrYrc5LDeVSZ-RcdfHC3YRo6ESGtz4Gc',
      detail: ['Gelecegin Milyoneri Frontend Yusuf'],
      projects: ['Project 10'],
      totalTasks: 14,
      doneTasks: 7,
      color: 'green'
    },
    {
      name: 'Deniz Selçuk',
      avatar: 'https://media.licdn.com/dms/image/D4D03AQF3otKga2uLwQ/profile-displayphoto-shrink_400_400/0/1686643010466?e=1701907200&v=beta&t=UPkXdtJZXc2XDsOdGuCejKfJx3OWViMU-kjRFvRCavY',
      detail: ['Toplantilara artik gel Deniz :D'],
      projects: ['Project 11'],
      totalTasks: 11,
      doneTasks: 5,
      color: 'brown'
    },
  ];
      
  const [clickedPerson, setClickedPerson] = useState<IUserInfos | null>(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
          <PageTitle breadcrumbs={[]} description=' > Kullanicilara Rol Verme'>
        Rol Atama
      </PageTitle>
      {/* <div className='row g-5 g-xl-8'>
        <MixedWidget1 className={''} color={''}/>
      </div> */}

<div 
// className={`card ${className}`}
>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Kullanici Rol Ekle/Cikar</span>
          {/* <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span> */}
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>İsim</th>
                <th className='min-w-140px'>Görev/Proje</th>
                <th className='min-w-120px'>Tamamladığı Task Sayısı</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>

            {
  usersAll &&
  (
    usersAll.map(singleUser => (
      <tr key={singleUser.name}>
        <td>
          <div className='form-check form-check-sm form-check-custom form-check-solid'>
            <input className='form-check-input widget-9-check' type='checkbox' value='1' />
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-45px me-5'>
              <img src={singleUser.avatar} alt='' />
            </div>
            <div className='d-flex justify-content-start flex-column'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                {singleUser.name}
              </a>
              <span className='text-muted fw-semibold text-muted d-block fs-7'>
                {singleUser.detail && singleUser.detail.join(', ')}
              </span>
            </div>
          </div>
        </td>
        <td>
          <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
            {singleUser.projects && singleUser.projects.join(', ')}
          </a>
          <span className='text-muted fw-semibold text-muted d-block fs-7'>
            {Number((singleUser.doneTasks / singleUser.totalTasks) * 100).toFixed(2)}% tamamlandi
          </span>
        </td>
        <td className='text-end'>
          <div className='d-flex flex-column w-100 me-2'>
            <div className='d-flex flex-stack mb-2'>
              <span className='text-muted me-2 fs-7 fw-semibold'>{Number((singleUser.doneTasks / singleUser.totalTasks) * 100).toFixed(2)}%</span>
            </div>
            <div className='progress h-6px w-100'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: `${Number((singleUser.doneTasks / singleUser.totalTasks) * 100).toFixed(2)}%`, background:singleUser.color }}
              ></div>
            </div>
          </div>
        </td>
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
              onClick={() => setClickedPerson(singleUser)}
            >
              <KTIcon iconName='switch' className='fs-3' />
            </a>
      <div className='my-0'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTIcon iconName='pencil' className='fs-3' />
          </button>
            <UserModal user={clickedPerson} onClose={function (): void {
                throw new Error('Function not implemented.')
              } } />
          </div>

          <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
            >
              <KTIcon iconName='trash' className='fs-3' />
            </a>

          </div>

        </td>
      </tr>
    ))
  )
}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>


   {clickedPerson && (
    <div className={`modal fade ${showModal ? 'show' : ''}`} role='dialog' tabIndex={-1} style={{ display: showModal ? 'block' : 'none' }}>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{clickedPerson.name}</h5>
                <button type='button' className='close' onClick={closeModal} aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
  {/* Add other information you want to display */}
  <p>Projects: {clickedPerson?.projects?.join(', ')}</p>
  <p>Total Tasks: {clickedPerson?.totalTasks}</p>
  <p>Done Tasks: {clickedPerson?.doneTasks}</p>
  {/* Add more details as needed */}
</div>

              <div className='modal-footer'>
                <button type='button' className='btn btn-light-primary font-weight-bold' onClick={closeModal}>
                  Close
                </button>
                <button type='button' className='btn btn-primary font-weight-bold'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

const AddRolesWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'addUser'})}</PageTitle>
      <br></br>
      <br></br>
      <AddRoles />
    </>
  )
}

export {AddRolesWrapper}
