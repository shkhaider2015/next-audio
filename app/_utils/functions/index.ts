
import { NextRequest } from 'next/server';
import { TisJSON } from '../types';



export const _isJSON = (req: NextRequest) => {
  const contentType = req.headers.get("content-type");
  let isJson:TisJSON = null;

  if(!contentType) isJson = null
  else if (contentType === "application/json") isJson = "JSON"
  else if (contentType.includes("multipart/form-data")) isJson = "Form"
  else isJson = "WRONG"

  return isJson;
};