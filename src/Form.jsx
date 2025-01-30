import './Form.css'
import { Heading } from "@chakra-ui/react";
import { Button, Input,} from "@chakra-ui/react"
import { Field } from "./components/ui/field"
import { useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import Loader from './Loader';
import Success from './Success';
import { QrCode } from "@chakra-ui/react"

import {
    NativeSelectField,
    NativeSelectRoot,
  } from "./components/ui/native-select"

export default function Form(){

    let [campId,setCampId]=useState('')
    let [name,setName]=useState('')
    let [phone,setPhone]=useState('')
    let [email,setEmail]=useState('')
    let [ticket,setTicket]=useState('')
    let [cat,setCat]=useState('')
    let [pay,setPay]=useState('')
    let [loading,setLoading]=useState(false);
    let [success,setSuccess]=useState(false);
    let id=uniqid();

    const handleSubmit=(e)=> {
        setLoading(true);
        e.preventDefault();
        console.log(id)
        let data={
            CampusID:campId,
            Name:name,
            Phone:phone,
            Email:email,
            Ticket:ticket,
            Category:cat,
            Pay:pay,
            UniqueID:id,
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
            setLoading(false)
        })
    }
if(!loading && !success){
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
                <Field label="Payment Method">
          <NativeSelectRoot className="color" >
            <NativeSelectField
            className="color"
              name="Payment Method"
              onChange={(e)=>setPay(e.target.value)} value={pay}
              items={[
                "Select",
                "UPI",
                "Cash",
              ]}
            />
          </NativeSelectRoot>
        </Field>
                <Button colorPalette="teal" variant="solid" type="submit" className='margin' >Submit</Button>
            </form>
            <QrCode.Root value={id}>
            <QrCode.Frame>
            <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
        </div>
        </>
    );
}
else if(loading && !success){
    return(
        <>
            <Loader></Loader>
        </>
    );
}
else if(loding && success){
    return(
        <>
            <Success></Success>
        </>
    );
}
}