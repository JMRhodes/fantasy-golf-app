import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Index({ auth }) {
    const { teams } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teams</h2>}
        >
            <Head title="Teams" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>

                        <ul className="block p-6">
                            {teams.map(function (team) {
                                return <li className="py-3" key={team.id}>{team.name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
