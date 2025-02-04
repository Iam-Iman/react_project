import React from 'react';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ addExpense }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    return (
        <form 
            action='' 
            className='mb-5' 
            onSubmit={handleSubmit((data) => {
                addExpense(data);
                reset();
            })}
        >
            <div className='mb-3'>
                <label htmlFor='description' className='form-label'>Description</label>
                <input 
                    id='description' 
                    type='text' 
                    className='form-control' 
                    {...register('description', { minLength: 5, required: true })} 
                />
                {errors.description?.type === 'required' && <p className='text-danger'>This field is required</p>}
                {errors.description?.type === 'minLength' && <p className='text-danger'>This field requires at least 5 characters</p>}
            </div>

            <div className='mb-3'>
                <label htmlFor='amount' className='form-label'>Amount</label>
                <input 
                    id='amount' 
                    type='number' 
                    className='form-control' 
                    {...register('amount', { required: true })} 
                />
                {errors.amount?.type === 'required' && <p className='text-danger'>This field is required</p>}
            </div>

            <div className='mb-3'>
                <label htmlFor='category' className='form-label'>Category</label>
                <select 
                    id='category' 
                    className='form-select' 
                    {...register('category', { required: true })}
                >
                    <option value=''></option>
                    <option value='essentials'>Essentials</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='food and beverages'>Food and Beverages</option>
                    <option value='groceries'>Groceries</option>
                    <option value='personal care'>Personal Care</option>
                    <option value='transport'>Transport</option>
                    <option value='utilities'>Utilities</option>
                </select>
                {errors.category?.type === 'required' && <p className='text-danger'>This field is required</p>}
            </div>

            <button className='btn btn-primary'>Submit</button>
        </form>
    );
};

export default ExpenseForm;
