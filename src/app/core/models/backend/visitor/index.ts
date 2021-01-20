export interface Visitor {
  visitorId: string;
  email: string;
  firstName: string;
  lastName: string;
  hasCovid?: boolean;
  hasSymptoms?: boolean;
  createdAt: number;
  personOfContactId: string;
  personOfContactName: string;
  organisationId: string;
  organisationName: string;
  officeId: string;
  visitorReason: VisitorReason[];
}

export interface VisitorReason {
  visitorReasonId: string;
  reason: string;
}
