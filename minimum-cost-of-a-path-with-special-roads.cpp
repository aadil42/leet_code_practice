class Solution {
public:
    int minimumCost(vector<int>& start, vector<int>& t, vector<vector<int>>& s) 
    {
        priority_queue<pair<int,pair<int,int>>> pq;
        pq.push({0,{start[0],start[1]}});
         map<pair<int,int>,int> dis;
        dis[{start[0],start[1]}]=0;
        
        for(int i=0;i<s.size();i++)
        {
            int dist=abs(start[0]-s[i][0])+abs(start[1]-s[i][1]);
             pq.push({-1*(dist),{s[i][0],s[i][1]}});
            dis[{s[i][0],s[i][1]}]=dist;
        }
        
        pq.push({-1*(abs(start[0]-t[0])+abs(start[1]-t[1])),{t[0],t[1]}});
        
        map<pair<int,int>,vector<vector<int>>> sr;
        
        for(int i=0;i<s.size();i++)
        {
            sr[{s[i][0],s[i][1]}].push_back({s[i][2],s[i][3],s[i][4]});
        }
        
        
       
        
        while(pq.size())
        {
             auto a=pq.top();
             int dt=-1*a.first,x=a.second.first,y=a.second.second;
            pq.pop();
            
            // dis[{x,y}]=dt;
            
            for(int i=0;i<s.size();i++) { int tx=s[i][0],ty=s[i][1],cost=abs(x-tx)+abs(y-ty); if(dis.find({tx,ty})==dis.end() or (dis[{tx,ty}]>(dt+cost))) { dis[{tx,ty}]=dt+cost; pq.push({-1*dis[{tx,ty}],{tx,ty}}); } }
            
             for(auto xv:sr[{x,y}])
             {
                  // tx,ty, costxy
                 
                  
                   int tx=xv[0],ty=xv[1],cost=xv[2];
                  if(dis.find({tx,ty})==dis.end() or (dis[{tx,ty}]>(dt+cost)))
                  {
                      dis[{tx,ty}]=dt+cost;
                      pq.push({-1*dis[{tx,ty}],{tx,ty}});
                  }
             }
            
             int tx=t[0],ty=t[1],cost=abs(t[0]-x)+abs(t[1]-y);
                  if(dis.find({tx,ty})==dis.end() or (dis[{tx,ty}]>(dt+cost)))
                  {
                      dis[{tx,ty}]=dt+cost;
                      pq.push({-1*dis[{tx,ty}],{tx,ty}});
                  }
            
        }
        
        // for(auto x:dis)
        // {
        //      cout<<x.first.first<<" "<<x.first.second<<" "<<x.second<<endl;
        // }
        
        return dis[{t[0],t[1]}];
    }
};