import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {useState} from "react";

export default function Index({auth}) {
    const [values, setValues] = useState({
        name: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/tournaments/add', values)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Tournament</h2>}
        >
            <Head title="Add Tournament"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Tournament Name:</label>
                                <input id="name" value={values.name} onChange={handleChange}/>
                                <label htmlFor="started_at">Start Date:</label>
                                <input id="started_at" value={values.started_at} onChange={handleChange}/>
                                <label htmlFor="ended_at">End Date:</label>
                                <input id="ended_at" value={values.ended_at} onChange={handleChange}/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
