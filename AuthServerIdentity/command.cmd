
dotnet ef migrations add InitConfigurationDbContext -c ConfigurationDbContext --project AuthServerIdentity

dotnet ef migrations add InitPersistedGrantDbContext -c PersistedGrantDbContext --project AuthServerIdentity

dotnet ef migrations add InitApplicationDbContext  -c ApplicationDbContext --project AuthServerIdentity


dotnet ef database update -c ConfigurationDbContext --project AuthServerIdentity

dotnet ef database update -c PersistedGrantDbContext --project AuthServerIdentity

dotnet ef database update -c ApplicationDbContext --project AuthServerIdentity


dotnet run bin/debug/net6.0 AuthServerIdentity /seed