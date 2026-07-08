export interface ShopperEvent {
  id: string;
  type: string;
  timestamp: string;
  product?: string;
}

export interface ShopperSession {
  sessionId: string;

  state: string;

  confidence: number;

  recommendation: string;

  reason: string;
  
  events: ShopperEvent[];
}