"use server"
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


export const getStudents = async ()=>{
    const students = await db.student.findMany({
        include:{
            documents:true,
            status:true
        }
    });
    return students;
}


export const getStudentById = async (id)=>{
    try {
        const student = await db.student.findUnique({
            where:{
                id:+id
            }
        });

        return student;
    } catch (error) {
        throw new Error(error);
    }
}

export const getStatuses = async ()=>{
    const statuses = await db.status.findMany();
    return statuses;
}

export const getDocuments = async ()=>{
    const documents = await db.document.findMany({
        include:{
            user:true
        }
    });
    return documents;
}

export const getMyDocuments = async (id)=>{
    const documents = await db.document.findMany({
        where:{
            userId:id
        },
        include:{
            user:true
        }
    });
    return documents;
}


