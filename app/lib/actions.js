"use server"
import { PrismaClient } from "@prisma/client";
import {join} from "path"
import { writeFile } from "fs/promises";

const db = new PrismaClient();


export const createStudent = async (formData)=>{
    const data = Object.fromEntries(formData);
    try {
        const student = await db.student.create({
            data:{
                ...data,password:'12345678',statusId:+data.statusId
                
            }
        })
        return student;
    } catch (error) {
        throw new Error(error)
    }
}



export const createStatus = async (formData)=>{
    const data = Object.fromEntries(formData);
    try {
        const status = await db.status.create({
            data:{
                ...data,
                
            }
        })
        return status;
    } catch (error) {
        throw new Error(error)
    }
}


export const updateStudent = async (id,formData)=>{
    try {
        console.log("server");
        const data = Object.fromEntries(formData);

        const updatedStudent = await db.student.update({
            where:{
                id:+id
            },
            data:{
                ...data,statusId:+data.statusId
            }
        });
        return updatedStudent
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export const uploadDocument = async (formData)=>{
    try {
        const{ file,...data} = Object.fromEntries(formData);
        if(!file) throw new Error("Invalid file");
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",file.name);
        console.log(filePath);
        await writeFile(filePath,buffer);
        const document = await db.document.create({
            data:{
                ...data,url:filePath,userId:+data.userId
            }
        });
        return document;
    } catch (error) {
        throw new Error(error);
    }
}


export const loginStudent = async (formData)=>{
    try {
        const {matric,password} = Object.fromEntries(formData);
        const student = await db.student.findUnique({
            where:{
                matric
            },
            include:{
                status:true
            }
        });
        if(!matric) throw new Error("Invalid credentials");
        const isPassMatched = password == student.password;
        if(!isPassMatched) throw new Error("Invalid credentials");
        return student;
    } catch (error) {
        throw new Error(error);
    }
}
