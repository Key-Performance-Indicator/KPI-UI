import React from 'react';
import { Dropdown1 } from '../../../../_metronic/partials/content/dropdown/Dropdown1';

interface IUserInfos {
  name: string;
  avatar: string;
  detail: Array<string>;
  projects: Array<string>;
  totalTasks: number;
  doneTasks: number;
  color: string;
}

interface UserModalProps {
  user: IUserInfos | null;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  const openDropdown = () => {
    // Implement logic to open the dropdown if needed
  };

  React.useEffect(
    () => {
        console.log(user?.name);
    }
    , );

  return (
<div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'> {user?.name} Rol Ekleme</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        {/* <div className='mb-10'>
          <label className='form-label fw-bold'>Rol :</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Admin</option>
              <option value='2'>User</option>
            </select>
          </div>
        </div> */}

        <div className='mb-10'>
          <label className='form-label fw-bold'>Roller :</label>

          <div className='d-flex'>
            <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value='1' />
              <span className='form-check-label'>Admin</span>
            </label>

            <label className='form-check form-check-sm form-check-custom form-check-solid'>
              <input className='form-check-input' type='checkbox' value='2' defaultChecked={true} />
              <span className='form-check-label'>User</span>
            </label>
          </div>
        </div>


        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className='btn btn-sm btn-secondary btn-active-light-primary me-2'
            data-kt-menu-dismiss='true'
          >
            Geri Al
          </button>

          <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Uygula
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
