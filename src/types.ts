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