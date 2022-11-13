import React from 'react';

import Layout from '@/components/Layout';

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return <Layout>{children}</Layout>;
}

interface DefaultTemplateProps {
  children: React.ReactNode;
}
