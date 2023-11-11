import {useEffect, useRef, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import { ICreateAccount, createAccountSchemas, inits } from '../../modules/wizards/components/CreateAccountWizardHelper'
import { StepperComponent } from '../../../_metronic/assets/ts/components'
import { KTIcon } from '../../../_metronic/helpers'

const AddUser = () => {
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const stepper = useRef<StepperComponent | null>(null)
  const [isSubmitButton, setSubmitButton] = useState(true)

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
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
    
      <PageTitle breadcrumbs={[]} description=' > kullanici ekle'>
        Kullanici Ekleme
      </PageTitle>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
          {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
<div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Kullanici Formu</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Kullanici olusturmak icin asagidaki formu eksiksiz doldurunuz
          
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Adi</label>

        <Field name='name' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='name' />
        </div>
      </div> 

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
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Kullanici Adi</label>

        <Field
          name='username'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='username' />
        </div>

      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Sifre</label>
        <Field
          name='password'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='password' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Sifre Onay</label>
        <Field
          name='passwordConfirm'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='passwordConfirm' />
        </div>
      </div>

    </div>      
    <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {isSubmitButton && 'Ekle'}
                        <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                      </span>
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
