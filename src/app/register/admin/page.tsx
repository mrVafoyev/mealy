"use client"

import React from "react";
import "./admin_panel.css";
import Link from 'next/link'
import { Button, Card, Input } from "@mui/material";

interface PROPS{
    setOption:React.Dispatch<React.SetStateAction<number>>
}
const AdminPanel = ({setOption}:PROPS) => {
	
const handleGetAdmin=()=>{

}
return (
	<div className="admin_panel_container w-screen h-screen bg-gray-800 " id="admin_panel_container">
		<Card className="flex w-2/6 bg-gray-400 h-3/7 p-8">
			<form className="flex flex-col items-center justify-between ml-auto mr-auto h-72  w-4/5 gap-2" id="admin_panel_inner_container">
				<h1 className="admin_panel_heading font-bold text-2xl">

					Admin{" "}
					<Link href="/" className="admin_panel_exit text-xl hover:bg-blue-800 text-white text-center w-fit" id="admin_panel_exit" >
						X
					</Link>
				</h1>
				<label className="admin_label" htmlFor="admin_first_name">
					First Name:
					<Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="admin_first_name" type="text" placeholder="admin first name" />
				</label>

				<label className="admin_label" htmlFor="admin_last_name">
					Last name:
					<Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="admin_last_name" type="text" placeholder="admin last name" />
				</label>

				<label className="admin_label" htmlFor="admin_password">
					Password:
					<Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="admin_password" type="password" placeholder="admin Password" />
				</label>

				<Button color="secondary" className="admin_submit_form" id="admin_submit_form">
					SUBMIT
				</Button>
			</form>
		</Card>
	</div>
);
};

export default AdminPanel;
