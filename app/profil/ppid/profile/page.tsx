"use client";

import { ProfileEntity } from "@/components/entities/profil/ppid/profile/ProfileEntity";
import { Video } from "@/components/entities/profil/ppid/profile/Video";
import { Moto } from "@/components/entities/profil/ppid/profile/Moto";
import { History } from "@/components/entities/profil/ppid/profile/History";
import { Ppid } from "@/components/entities/profil/ppid/profile/Ppid";

export default function ProfilePpid() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProfileEntity title="Profile PPID" description="asd" />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            <Video />
            <Moto />
            <History />
            <Ppid />
          </div>
        </div>
      </main>
    </div>
  );
}
