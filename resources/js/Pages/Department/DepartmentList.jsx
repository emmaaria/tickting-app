import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {useState} from "react";

export default function DepartmentList({auth, departments}) {
    const [departmentList, setDepartmentList] = useState(departments.data ? departments.data : [])
    const [links, setLinks] = useState(departments.links ? departments.links : []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex justify-between">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Departments</h2>
                <Link href={route('departments.create')} className="btn btn-primary">
                    Add New
                </Link>
            </div>}
        >
            <Head title="Users"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="card border-info">
                        <div className="card-header">
                            Department List
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    (departmentList && departmentList.length > 0) && (
                                        departmentList.map((department) => (
                                            <tr key={department.id}>
                                                <td>{department.title}</td>
                                                <td>
                                                    <div className="actions float-end">
                                                        <a href="#" className="text-info" title="عرض"><i
                                                            className="fa fa-eye"
                                                            aria-hidden="true"></i></a>
                                                        <a href="#" className="text-warning" title="تعديل"><i
                                                            className="fa fa-pen"
                                                            aria-hidden="true"></i></a>
                                                        <a href="#" className="text-danger" title="حذف"><i
                                                            className="fa fa-trash"
                                                            aria-hidden="true"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <nav aria-label="list users">
                                <ul className="pagination m-0">
                                    {
                                        links.map(el => (
                                            <li className={`page-item ${el.active === true ? 'active' : ''}`}
                                                key={el.label}>
                                                <Link
                                                    href={el.url}
                                                    dangerouslySetInnerHTML={{__html: el.label}}
                                                    className={`page-link`}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
