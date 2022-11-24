import { getFileBuffer } from "../util/test.util";

export const fileWithWrongInstructionsMock = {
  path: 'test/mocks/wrong-instructions.txt',
  destination: 'test/mocks',
  fieldname: 'file',
  filename: 'wrong-instructions.txt',
  mimetype: 'text/plain',
  originalname: 'wrong-instructions.txt',
  size: 35,
  buffer: getFileBuffer('test/mocks/wrong-instructions.txt'),
  stream: '' as any,
  encoding: '7bit',
};