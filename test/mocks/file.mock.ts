import { getFileBuffer } from "../util/test.util";

export const fileMock = {
  path: 'test/mocks/instructions.txt',
  destination: 'test/mocks',
  fieldname: 'file',
  filename: 'instructions.txt',
  mimetype: 'text/plain',
  originalname: 'instructions.txt',
  size: 35,
  buffer: getFileBuffer('test/mocks/instructions.txt'),
  stream: '' as any,
  encoding: '7bit',
};