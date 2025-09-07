import * as yup from 'yup'

export const category_schema = yup.object({
    name:yup.string().required('Category name is required'),
    description:yup.string().required('Category descriptton is required').min(25,'Minimun 25 char required')
})