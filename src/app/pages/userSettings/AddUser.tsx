import {useEffect, useRef, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
// import { ICreateAccount, createAccountSchemas, inits } from '../../modules/wizards/components/CreateAccountWizardHelper'

import { ICreateUser, createAddUserSchemas, inits } from './AddUserHelper'
import { StepperComponent } from '../../../_metronic/assets/ts/components'
import { KTIcon } from '../../../_metronic/helpers'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { addUser } from '../../modules/auth/utils/handleAuth'
import clsx from 'clsx'

const AddUser = () => {
  const [currentSchema, setCurrentSchema] = useState(createAddUserSchemas[0])
  const [initValues] = useState<ICreateUser>(inits)
  const stepper = useRef<StepperComponent | null>(null)
  const [isSubmitButton, setSubmitButton] = useState(true)
  const [loading,setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName       : '',
      lastName        : '',
      username        : '',
      password        : '',
      passwordConfirm : ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Ad gereklidir'),
      lastName: Yup.string().required('Soyadi gereklidir'),
      username: Yup.string().required('Kullanici adi gereklidir'),
      password: Yup.string().required('Sifre gereklidir'),
      passwordConfirm: Yup.string().required('Sifre onayi gereklidir'),
    }),
    onSubmit: async (values, { setStatus, setSubmitting }) => {
            console.log('Add user function called',values.firstName);
            await handleFormSubmission(values, { setStatus, setSubmitting });

            // setLoading(true)
      // try {
      //   const response = await addUser(values.firstName, values.lastName, values.username, values.password, values.passwordConfirm)

      //   if (response) {
      //     console.log('Done response', response)
      //   } else {
      //     console.log('Error response', response)
      //   }
      // } catch (error) {
      //   console.error(error)
      // } finally {
      //   setLoading(false)
      // }
    },
  })
  const handleFormSubmission = async (values : any, formikHelpers : any) => {
    console.log('Add user function called', values.firstName);

    setLoading(true);
    try {
      const response = await addUser(
        values.firstName,
        values.lastName,
        values.username,
        values.password,
        values.passwordConfirm
      );

      if (response) {
        console.log('Done response', response);
      } else {
        console.log('Error response', response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
    
      <PageTitle breadcrumbs={[]} description=' > kullanici ekle'>
        Kullanici Ekleme
      </PageTitle>

      <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={handleFormSubmission}>
                  {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
<div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Kullanici Formu</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Kullanici olusturmak icin asagidaki formu eksiksiz doldurunuz
          
        </div>
      </div>

      {/* <div className='fv-row mb-10'>
        <label className='form-label required'>Adi</label>

        <Field name='name' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='name' />
        </div>
      </div>  */}

      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Adı</label>
        <input
          placeholder='Adı'
          {...formik.getFieldProps('firstName')} 
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.firstName && formik.errors.firstName},
            {
              'is-valid': formik.touched.firstName && !formik.errors.firstName,
            }
          )}
          type='text'
          name='firstName' 
          autoComplete='off'
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.firstName}</span>
          </div>
        )}
      </div>
{/* 
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Soyadi</span>
        </label>

        <Field
          name='lastname'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='lastname' />
        </div>

        <div className='form-text'>
          Kullanicinin gercek isim ve soyisimlerini kullaniniz
        </div>
      </div> */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Soyadı</label>
        <input
          placeholder='Soyadı'
          {...formik.getFieldProps('lastName')} 
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.lastName && formik.errors.lastName},
            {
              'is-valid': formik.touched.lastName && !formik.errors.lastName,
            }
          )}
          type='text'
          name='lastName' 
          autoComplete='off'
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.lastName}</span>
          </div>
        )}
      </div>
{/* 
      <div className='fv-row mb-10'>
        <label className='form-label required'>Kullanici Adi</label>

        <Field
          name='username'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='username' />
        </div>

      </div> */}

      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Kullanıcı Adı</label>
        <input
          placeholder='Kullanıcı Adı'
          {...formik.getFieldProps('username')} 
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.username && formik.errors.username},
            {
              'is-valid': formik.touched.username && !formik.errors.username,
            }
          )}
          type='text'
          name='username' 
          autoComplete='off'
        />
        {formik.touched.username && formik.errors.username && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.username}</span>
          </div>
        )}
      </div>


      {/* <div className='fv-row mb-10'>
        <label className='form-label required'>Sifre</label>
        <Field
          name='password'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='password' />
        </div>
      </div> */}

      
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Şifre</label>
        <input
          placeholder='Şifre'
          {...formik.getFieldProps('password')} 
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.password && formik.errors.password},
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
          type='password'
          name='password' 
          autoComplete='off'
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.password}</span>
          </div>
        )}
      </div>
{/* 
      <div className='fv-row mb-10'>
        <label className='form-label required'>Sifre Onay</label>
        <Field
          name='passwordConfirm'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='passwordConfirm' />
        </div>
      </div> */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>Şifre Tekrar</label>
        <input
          placeholder='Şifre Tekrar'
          {...formik.getFieldProps('passwordConfirm')} 
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.passwordConfirm && formik.errors.passwordConfirm},
            {
              'is-valid': formik.touched.passwordConfirm && !formik.errors.passwordConfirm,
            }
          )}
          type='password'
          name='passwordConfirm' 
          autoComplete='off'
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.passwordConfirm}</span>
          </div>
        )}
      </div>

    </div>      
    <div>
                    {/* <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {isSubmitButton && 'Ekle'}
                        <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                      </span>
                    </button> */}
    <button
              type='submit'
              id='kt_sign_in_submit'
              className='btn btn-primary'
              disabled={formik.isSubmitting}
              onClick={ ()=>{ console.log('tiklanildim'); handleFormSubmission(formik.values,'') } }
            >

              {!loading && <span className='indicator-label'>Ekle</span>}
              {loading && (
                <span className='indicator-progress' style={{ display: 'block' }}>
                  Bekleyiniz...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
                  </div>        
    </Form>
            )}
    </Formik>
    </>
  )
}

const AddUserWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <br></br>
      <br></br>
      <AddUser />
    </>
  )
}

export {AddUserWrapper}
