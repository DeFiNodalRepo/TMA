export interface AppConf {
  Status: "sucess" | "Failure",
  conf: string,
  sync: string
}

export interface VaultConf {
  uri: string;
  title: string;
  description: string;
  section: string;
  ConditionType: string;
  conditionId: string;
  conditionValue: number;
  isEnabled: boolean;
}

export interface VaultSync {
  upgradePrice: number | undefined;
  currentProfitPerHour: number;
  profitPerHourDelta: number;
  currentLevel: number;
  [key: string]: number | undefined;
  }

export interface CardPopUpProps {
  isPopupOpen?: boolean,
  img: string, 
  name: string
  description: string
  price: number | undefined, 
  earnings: number | undefined, 
  id: string, 
  profitPerHourDelta: number | undefined, 
  onInvestClick: (voultId: string) => void
}

export interface VaultCardProps extends CardPopUpProps {
  currentLevel: number | undefined;
}

export interface Mission {
  uri: string;
  externalURL: string;
  title: string;
  description: string;
  reward: number;
  ExpiresAt: string;
  isEnabled: boolean;
}

export interface Missions extends Mission{
  key: string;
}

export interface MissionsProps {
  missions: Record<string, Mission>;
  syncMissions: Record<string, any>; 
  onSelectMission: (key: string) => void; 
}

interface Article {
  uri: string;
  externalURL: string;
  title: string;
  description: string;
  createdAt: string;
  pinned: boolean;
  isEnabled: boolean;
}

export interface NewsProps {
  news: Article[];
}

export interface CryptoStats {
  id: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: string;
  changeType: 'increase' | 'decrease';
  change: number;
}