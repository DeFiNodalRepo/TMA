# Endpoints

GET("/conf")
POST("/authorise")
POST("/sync")
POST("/upgrade")

# Telegram Docs
https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react

"{"balance":1.961905,"ratePerHour":3600,"invites":null,"storagePeriod":10800,"invitedBy":"","totalBalance":1.961905,"lastUpdate":"2024-07-19T13:29:34.961905+03:00","upgrades":{"BNBVault":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"BNBVault2":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"BNBVault3":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"BTCVault":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"BTCVault2":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"BTCVault3":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"ETHVault":{"upgradePrice":4,"currentProfitPerHour":0,"profitPerHourDelta":8,"currentLevel":0},"ETHVault2":{"upgradePrice":4,"currentProfitPerHour":0,"profitPerHourDelta":8,"currentLevel":0},"ETHVault3":{"upgradePrice":4,"currentProfitPerHour":0,"profitPerHourDelta":8,"currentLevel":0},"XRPVault":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"XRPVault2":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0},"XRPVault3":{"upgradePrice":1008,"currentProfitPerHour":0,"profitPerHourDelta":4,"currentLevel":0}},"missions":{"cash":{"isCompleted":false},"x":{"isCompleted":false},"youtube":{"isCompleted":false}},"dailyDays":0,"DailyLastDay":"0001-01-01T00:00:00Z"}"

export function useSyncData(apiToken, upgradeId) {
  // fetch data
  const fetchSyncData = async () => {
    const res = await fetch(`${baseUrl}/sync`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });
    if (!res.ok) throw new Error('Failed to fetch Sync data');
    return res.json();
  };

  // post data
  const postSyncData = async () => {
    const res = await fetch(`${baseUrl}/upgrade`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify({ upgradeId: upgradeId }),
    });
    if (!res.ok) throw new Error('Failed to post upgrade data');
    return res.json();
  };

  // Query - fetching data
  const query = useQuery({
    queryKey: ['syncData', apiToken, upgradeId],
    queryFn: fetchSyncData,
    enabled: !!apiToken && !!upgradeId,
    staleTime: 10 * 60 * 1000,
    refetchOnMount: false,
  });

  // Mutating data (check if mutation can be run within a useEffect)
  const mutation = useMutation({
    mutationKey: ['postSync', apiToken, upgradeId],
    mutationFn: mutateData,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    postSync: mutation.mutate,
    isPosting: mutation.isLoading,
    postError: mutation.error,
    isPostError: mutation.isError,
    isPostSuccess: mutation.isSuccess,
    postData: mutation.data,
  };
}


{
    "Body": "{\"balance\":2000099466.0913627,\"ratePerHour\":3609,\"invites\":null,\"storagePeriod\":10800,\"invitedBy\":\"\",\"totalBalance\":99471.09136231981,\"lastUpdate\":\"2024-07-21T22:31:31.1639853+03:00\",\"upgrades\":{\"BNBVault\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BNBVault2\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BNBVault3\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BTCVault\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BTCVault2\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BTCVault3\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"ETHVault\":{\"upgradePrice\":15,\"currentProfitPerHour\":9,\"profitPerHourDelta\":73,\"currentLevel\":2},\"ETHVault2\":{\"upgradePrice\":4,\"currentProfitPerHour\":0,\"profitPerHourDelta\":8,\"currentLevel\":0},\"ETHVault3\":{\"upgradePrice\":4,\"currentProfitPerHour\":0,\"profitPerHourDelta\":8,\"currentLevel\":0},\"XRPVault\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"XRPVault2\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"XRPVault3\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0}},\"missions\":{\"cash\":{\"isCompleted\":true},\"x\":{\"isCompleted\":false},\"x2\":{\"isCompleted\":false},\"x3\":{\"isCompleted\":false},\"youtube\":{\"isCompleted\":false}},\"dailyDays\":0,\"DailyLastDay\":\"0001-01-01T00:00:00Z\"}",
    "Status": "sucess"
}

{
    "Body": "{\"balance\":2000099464.9244676,\"ratePerHour\":3609,\"invites\":null,\"storagePeriod\":10800,\"invitedBy\":\"\",\"totalBalance\":99469.92446705657,\"lastUpdate\":\"2024-07-21T22:31:30.8309541+03:00\",\"upgrades\":{\"BNBVault\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BNBVault2\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BNBVault3\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BTCVault\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BTCVault2\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"BTCVault3\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"ETHVault\":{\"upgradePrice\":15,\"currentProfitPerHour\":9,\"profitPerHourDelta\":73,\"currentLevel\":2},\"ETHVault2\":{\"upgradePrice\":4,\"currentProfitPerHour\":0,\"profitPerHourDelta\":8,\"currentLevel\":0},\"ETHVault3\":{\"upgradePrice\":4,\"currentProfitPerHour\":0,\"profitPerHourDelta\":8,\"currentLevel\":0},\"XRPVault\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"XRPVault2\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0},\"XRPVault3\":{\"upgradePrice\":1008,\"currentProfitPerHour\":0,\"profitPerHourDelta\":4,\"currentLevel\":0}},\"missions\":{\"cash\":{\"isCompleted\":true},\"x\":{\"isCompleted\":false},\"x2\":{\"isCompleted\":false},\"x3\":{\"isCompleted\":false},\"youtube\":{\"isCompleted\":false}},\"dailyDays\":0,\"DailyLastDay\":\"0001-01-01T00:00:00Z\"}",
    "Status": "sucess"
}

check for // @ts-ignore in production