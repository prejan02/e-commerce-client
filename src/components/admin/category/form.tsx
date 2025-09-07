import { FormProvider, useForm } from "react-hook-form"
import Input from "../../common/inputs/input";
import TextArea from "../../common/inputs/text-area";
import Button from "../../common/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { category_schema } from "../../../schema/category.schema";
import type { ICategoryData } from "../../../types/category.types";
import { useMutation } from "@tanstack/react-query";
import { postCategory } from "../../../api/category.api";
import toast from "react-hot-toast";

const CategoryForm = () => {

    const methods = useForm({
        defaultValues:{
            name:'',
            description:''
        },
        resolver:yupResolver(category_schema),
        mode:'all'
    })
    //mutation
    const {mutate,isPending} = useMutation({
        mutationFn:postCategory,
        onSuccess:(response)=>{
            toast.success(response.message || 'Category Added')
            methods.reset()
        },
        onError:(error)=>{
            toast.error(error.message || 'Something went wrong')
        }
    })
    const onSubmit = (data:ICategoryData)=>{
        console.log('category form ',data);
        mutate(data)
        
    }
  return (
    <div>
        {/* hook form provider */}
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* name input */}
                <Input
                name="name"
                id="name"
                label='Category Name'
                placeholder="Food and Drinks"
                required
                />
                {/* description */}
                <TextArea
                name="description"
                id="description"
                label='Description'
                placeholder="Describe category here"
                required
                />
                <div>
                    <Button
                    label={isPending?'Submitting':'Submit'}
                    type="submit"
                    isPending={isPending}
                    />
                </div>


                
            </form>

        </FormProvider>
    </div>
  )
}

export default CategoryForm