import { TisJSON, _isJSON } from "@/app/_utils";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "object-to-formdata";


export async function POST(req: NextRequest) {
    try {
      let data = null;
      const errors: string[] = [];
  
      const contentType:TisJSON = _isJSON(req);
      if(!contentType)
      {
        return NextResponse.json({ message: "Data in a body is not known" }, { status: 401 });
      }
  
      if(contentType === "JSON")  data = serialize(await req.json())
      if(contentType === "Form" ) data = await req.formData()
      if(contentType === "WRONG") {
        return NextResponse.json({ message: "Only JSON or Form data is valid" }, { status: 402 });
      }

      return NextResponse.json({ message: "Success Post" }, { status: 200 });
  
    } catch (error) {
      console.log("Error : ", error);
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  }