import { User } from './../user/index';
export interface Booking {
  bookingId: string;
  officeId: string;
  description: string;
  organisationId: string;
  boardroomId: string;
  boardroomName: string;
  hostId: string;
  hostName: string;
  attendees: User[];
  isExternal: boolean;
  createdAt: number;
  updatedAt: number;
  startDateTime: number;
  endDateTime: number;
}
