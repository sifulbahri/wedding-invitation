export interface WeddingEvent {
  id: number;
  title: string;
  startsAt: ISODateTimeString;
  endsAt: ISODateTimeString;
  venue: string;
  address: string;
  mapsUrl: string;
}
