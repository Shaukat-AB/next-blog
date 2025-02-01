import type { Metadata } from "next/types";
import { getUsers } from "@/lib/actions/users";
import UserRow from "@/components/user-row/UserRow";
import Table from "@/components/table/Table";

export const metadata: Metadata = {
    title: "UserList",
    description: "List of users stored in database",
};

const tableHead = ["Email", "Name", "Date Updated", "Delete", "Edit"];

const UsersListPage = async () => {
    const users = await getUsers();

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table tableHead={tableHead}>
                <tbody>
                    {users.map((user) => (
                        <UserRow
                            key={user.id}
                            userStringified={JSON.stringify(user)}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersListPage;
