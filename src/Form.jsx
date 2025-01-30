import './Form.css'
import { Heading } from "@chakra-ui/react";
import { Button, Input,} from "@chakra-ui/react"
import { Field } from "./components/ui/field"
import { useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid'


export default function Form(){

    let [campId,setCampId]=useState('')
    let [name,setName]=useState('')
    let [phone,setPhone]=useState('')
    let [email,setEmail]=useState('')
    let [ticket,setTicket]=useState('')
    let [cat,setCat]=useState('')
    let [pay,setPay]=useState('')
    let [uniqId,setUniqId]=useState(null);

    const handleSubmit=(e)=> {
        e.preventDefault();
        let data={
            CampusID:campId,
            Name:name,
            Phone:phone,
            Email:email,
            Ticket:ticket,
            Category:cat,
            Pay:pay,
            UniqueID:uniqid(),
        }
        axios.post("https://api.sheetbest.com/sheets/ef9cd1df-74f8-4f5e-8663-d79e98919695",data).then((response)=>{
            console.log(response);
            setCampId('');
            setName('');
            setPhone('');
            setEmail('');
            setTicket('');
            setCat('');
            setPay('');
            uniqId(null)
        })
        console.log(campId);
        console.log(name);
        console.log(phone);
        console.log(email);
        console.log(ticket);
        console.log(cat);
        console.log(pay);
    }

    return(
        <>
        <div className="main">
            <form onSubmit={handleSubmit}>
                <Heading size="3xl" >Loca Luz Carnival Ticket Registration</Heading>
                <Field className="Field" label="Campus Ambassador ID" required>
                    <Input placeholder="Enter Campus Ambassador ID" onChange={(e)=>setCampId(e.target.value)} value={campId} />
                </Field>
                <Field className="Field" label="Full Name" required>
                    <Input placeholder="Enter your Full Name" onChange={(e)=>setName(e.target.value)} value={name} />
                </Field>
                <Field className="Field" label="Phone Number" required>
                    <Input placeholder="Enter your Phone Number" onChange={(e)=>setPhone(e.target.value)} value={phone} />
                </Field>
                <Field className="Field" label="Email Address" required>
                    <Input placeholder="Enter Your Email-ID" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </Field>
                <Field className="Field" label="Ticket Type" required>
                    <Input placeholder="FANPIT / VIP / Premium" onChange={(e)=>setTicket(e.target.value)} value={ticket} />
                </Field>
                <Field className="Field" label="Category" required>
                    <Input placeholder="1-Day Pass / 2-Day Pass" onChange={(e)=>setCat(e.target.value)} value={cat} />
                </Field>
                <Field className="Field" label="Payment Method" required>
                    <Input placeholder="Cash / UPI" onChange={(e)=>setPay(e.target.value)} value={pay} />
                </Field>
                <Button colorPalette="teal" variant="solid" type="submit">Submit</Button>
            </form>
        </div>
        </>
    );
}