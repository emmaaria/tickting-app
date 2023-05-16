import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";

export default function DepartmentCreate({auth}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        title: '',
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('departments.store'));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex justify-between">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Create New Department</h2>
            </div>}
        >
            <Head title="Create New Department"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        <div className="card border-info">
                            <div className="card-header">
                                Create New Department
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <InputLabel htmlFor="title" value="Title"/>
                                        <TextInput
                                            id="title"
                                            name="title"
                                            value={data.title}
                                            className="mt-1 block w-full"
                                            autoComplete="title"
                                            isFocused={true}
                                            onChange={(e) => setData('title', e.target.value)}
                                            required
                                        />

                                        <InputError message={errors.title} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-end">
                                <Link href={route('departments')} className="btn btn-danger d-inline-block mr-3">
                                    Back
                                </Link>
                                <button className="btn btn-primary" onClick={submit}>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
